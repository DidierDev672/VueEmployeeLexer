import axios from "axios";

export default {
    async getAllEmployees() {
        let data = [];
        try {
            const response = await axios.get("http://localhost:1234/api/employee");
            data.push(response.data);
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log("---------------------------------------------");
            console.log(errorMessage);
        }
        return data;
    },

    getEmployee({ code }) {
        axios.get(`http://localhost:1234/api/employee/${code}`)
            .then((result) => {
                return result.data;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    },

    async postEmployee({ data }) {
        try {
            const response = await axios.post(`http://localhost:1234/api/employee`, {
                ...data
            });

            return response.data;
         }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log("-------------------------------------------");
            console.log(errorMessage);
        }
    },

    async putEmployee({ data, code }) {
        try{
            await axios.put(`http://localhost:1234/api/employee/${code}`, data);
        }
        catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log("-----------------------------------------------");
            console.log(errorMessage);
        }
    },

    async deleteEmployee({ code }) {
        try{
            await axios.delete(`http://localhost:1234/api/employee/${code}`);
        }
        catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log("-----------------------------------------");
            console.log(errorMessage);
        }
    }
};