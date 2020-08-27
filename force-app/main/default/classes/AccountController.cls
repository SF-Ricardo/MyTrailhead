public with sharing class AccountController {
    public AccountController() {}

    public static List<Account> getAllActiveAccounts() {
        return [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'Yes'];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts(){
        return[
            SELECT Name,AnnualRevenue,Industry FROM Account WITH SECURITY_ENFORCED ORDER BY Name
        ];
    }

    /**
     * 
     * WITH SECURITY_ENFORCED
     * 仅将字段级和对象级安全性检查应用于SELECT或FROM SOQL子句中引用的字段和对象，
     * 而不应用于诸如WHERE或ORDER BY之类的子句。 
     * 换句话说，安全性是基于SOQL SELECT查询返回的内容而不是用于运行查询的所有元素的安全性。
     * 
     * 插入WITH SECURITY_ENFORCED子句：
     * 在WHERE子句之后（如果存在），否则在FROM子句之后。
     * 在任何ORDER BY，LIMIT，OFFSET或聚合函数子句之前
     * 
     * 使用WITH SECURITY_ENFORCED查询多态查询字段时有一些限制。 多态字段是可以指向多个实体的关系字段。
     * 使用WITH SECURITY_ENFORCED的查询不支持遍历多态字段的关系 - [Event WhatId这种叫多态字段]
     */
    @AuraEnabled(cacheable = true)
    public static List<Contact> getRelatedContacts(Id searchId){
        return [
            SELECT Name,Title,Email,Phone
            FROM Contact
            WHERE AccountId =: searchId
            WITH SECURITY_ENFORCED
        ];
    }
}