export class Task {
    title: string;
    description: string;
    category: string;
    color: string;
    assigned: [];
    dueDate: string;

    constructor(obj?: any) {
        this.title = obj ? obj.title : '';
        this.description = obj ? obj.description : '';
        this.category = obj ? obj.category : '';
        this.color = obj ? obj.color : '';
        this.assigned = obj ? obj.assigned : '';
        this.dueDate = obj ? obj.dueDate : '';
    }

    public toJSON() {
        return {
            title: this.title,
            description: this.description,
            category: this.category,
            color: this.color,
            assigned: this.assigned,
            dueDate: this.dueDate,
        }
    }
}