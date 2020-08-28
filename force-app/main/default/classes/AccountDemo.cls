public with sharing class AccountDemo {
    public AccountDemo() {}

    @AuraEnabled(cacheable = true)
    public static List<Account> QueryAccount(){
        return [SELECT Id,Name FROM Account];
    }
}
