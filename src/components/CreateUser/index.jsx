import { useLocation } from "wouter";

export function CreateUser() {
  const [, navigate] = useLocation();

  const createUser = async () => {
    const response = await globalThis.fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: "Stephen",
        last_name: "Sampedro",
        email: "stephensampedro@gmail.com",
      }),
    });
    if (response.status === 201) {
      alert("User created");
      return navigate("/");
    }
  };

  return (
    <>
      <h1>Create user</h1>
      <button onClick={createUser}>Add</button>
    </>
  );
}
