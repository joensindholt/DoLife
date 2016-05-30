/// <reference path="./common/identifiable.interface.ts" />
/// <reference path="./common/repository.interface.ts"/>

export class Routes {

    constructor(router: any, private resourceName: string, private repository: any) {

        console.log('Routes: setting up routes for resource %s using repository collection %s', this.resourceName, this.repository.collection);

        router.get('/' + resourceName, (req, res) => {
            console.log('Get all requested for resource %s using repository %s', resourceName, this.repository.collection);
            this.repository.getAll().then((resources) => {
                console.log('Found resources', resources);
                res.json(resources);
            });
        });

        router.get('/' + resourceName + '/:id', (req, res) => {
            this.repository.read(req.params.id).then((resource) => {
                res.json(resource);
            });
        });

        router.post('/' + resourceName, (req, res) => {
            this.repository.create(req.body).then((resource) => {
                res.json(resource);
            });
        });

        router.put('/' + resourceName + '/:id', (req, res) => {
            var resource: Common.Identifiable = req.body;
            if (req.params.id !== resource._id) {
                res.status(400).send('Ids do not match');
            } else {
                this.repository.update(req.body).then((resource) => {
                    res.json(resource);
                });
            }
        });

        router.delete('/' + resourceName + '/:id', (req, res) => {
            this.repository.delete(req.params.id).then(() => {
                res.sendStatus(200);
            });
        });
    }
}
