/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="./../common/dynamodb.crud.repository.ts"/>

import Repository = require('../common/dynamodb.crud.repository');

export class MemberRepository extends Repository.DynamoDbCrudRepository<Members.Member> {
    constructor(db: any) {
        super(db, "members");
    }
}
