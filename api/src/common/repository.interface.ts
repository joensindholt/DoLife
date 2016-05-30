/// <reference path="identifiable.interface.ts" />

export interface Repository<T extends Common.Identifiable> {
    create(t: T): Promise<T>;
    read(id: number): Promise<T>;
    delete(id: number): Promise<{}>;
}
