export class BrowserUtility {

    static async sleep(seconds){
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }

    // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...
    

    // CREATE FUNCTIONS THAT CAN VERIFY EXPECTED AND ACTUAL MESSAGES ARE EQUAL USE PROMISES

            static async verifyMessages(actual ,expected) {
                 return new Promise((resolve) => {
                    resolve(expected.toString() === actual.toString);
                });
            }
       
}