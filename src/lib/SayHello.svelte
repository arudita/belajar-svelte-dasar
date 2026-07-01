<script>
    let person = $state({
        firstName: "",
        lastName: ""
    });

    function sayHello() {
        person.firstName = document.getElementById("firstName").value;
        person.lastName = document.getElementById("lastName").value;
    }
</script>

<div>
    <input type="text" id="firstName" placeholder="First Name">
    <input type="text" id="lastName" placeholder="Last Name">

    <button type="button" onclick={sayHello}>Say</button>
    <h1>Hello {person.firstName} {person.lastName}</h1>
</div>