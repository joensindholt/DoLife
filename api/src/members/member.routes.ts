import Repository = require('./member.repository');
import Routes = require('./../routes');

export class MemberRoutes extends Routes.Routes {

    memberRepository: Repository.MemberRepository;

    constructor(db: any, router: any) {
        super(router, "members", new Repository.MemberRepository(db));
    }
}
