module Members {

    export interface Member extends Common.Identifiable {
        name: string,
        email: string,
        phone: string,
        address: string,
        postalCode: string,
        city: string
    }

}
