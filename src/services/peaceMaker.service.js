import http from "../http-common";

class PeaceMakerService {

    login(data) {
        return http.post("/login/", data);
    }
    registeruser(data) {
        return http.post("/register/", data);
    }
    getAll() {
        return http.get("/tickets/read_tickets.php");
    }
    get(id) {
        return http.get(`/tickets/read_ticket.php?id=${id}`);
    }
    create(data) {
        return http.post("/tickets/create_ticket.php", data);
    }
    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }
    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }
    deleteAll() {
        return http.delete(`/tutorials`);
    }
    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`);
    }
    searchEmployee(name) {
        return http.get(`/employee/find_emp.php?query=${name}`);
    }
    searchCustomer(name) {
        return http.get(`/customers/find_cus.php?query=${name}`);
    }
}
export default new PeaceMakerService();