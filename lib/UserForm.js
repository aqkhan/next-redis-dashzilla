export default function UserForm() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form  = new FormData(e.target);

        const formData = Object.fromEntries(form.entries());

        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        console.table(data);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" required="required" placeholder="Name" />
        <input
          name="email"
          type="email"
          required="required"
          placeholder="Email"
        />
        {/* This is supposed to be a dropdown for now */}
        <input name="role" type="text" required="required" placeholder="Role" />
        <input
          name="status"
          type="text"
          required="required"
          placeholder="Status"
        />
        <input
          name="createdAt"
          type="text"
          
          placeholder="Created at"
        //   value={new Date().toLocaleString() + ""}
        />
        <button type="submit">Create User</button>
      </form>
    );
}