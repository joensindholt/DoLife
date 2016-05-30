/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../common/dynamodb.crud.repository.ts"/>

import Repository = require('../common/dynamodb.crud.repository');

export class EventRepository extends Repository.DynamoDbCrudRepository<Events.Event> {
    constructor(db: any) {
        super(db, "events");
    }
}
