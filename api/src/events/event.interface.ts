module Events {

    export interface Event extends Common.Identifiable {
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
}
