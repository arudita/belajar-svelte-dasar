<script>
    import UserRow from "./UserRow.svelte";

    const users = [
        {
            id: 1, 
            name: 'Fajar Setiawan',
            address: 'Jepara, Indonesia'
        },
        {
            id: 2, 
            name: 'Dias Fadillah',
            address: 'Banyumas, Indonesia'
        },
        {
            id: 3, 
            name: 'Birrutaqiyan',
            address: 'Jepara, Indonesia'
        },
    ]
</script>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
    {#each users as user}
        <UserRow {...user}/>
    {/each}
    </tbody>
</table>