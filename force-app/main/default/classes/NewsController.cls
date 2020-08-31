public with sharing class NewsController {
    
    public NewsController() {}

    // add
    @AuraEnabled
    public static void AddNewsRecord(News__c objnews){
        System.debug(LoggingLevel.info, objnews);

        try{
            insert objnews;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }

    // list
    @AuraEnabled(cacheable=true)
    public static List<News__c> getNewList(){
        return [
            SELECT 
                Id,Name,Level__c,sendTime__c,Active__c,Owner.Name 
            FROM  News__c 
            WITH SECURITY_ENFORCED Order by Name];
    }

    // search

    // delete
}
