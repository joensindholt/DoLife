module Model {

    export interface Identifiable {
        _id?: string;
    }

    export interface Member extends Identifiable {
        name: string,
        email: string,
        phone: string,
        address: string,
        postalCode: string,
        city: string
    }

    export interface Event extends Identifiable {
        title: string,
        descripton: string,
        date: any,
        endDate: any,
        location: string,
        meetingLocation: string,
        meetingDate: any,
        tasks: [{
            memberId: string,
            memberName: string,
            taskId: string,
            taskTitle: string
        }]
    }

    export interface Task extends Identifiable {
        title: string
    }
}
