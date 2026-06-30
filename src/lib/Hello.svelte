<script>
const name = 'Fajar Setiawan';
const src = 'https://images.pexels.com/photos/6340908/pexels-photo-6340908.jpeg';
const alt = "Aerial view of Jakarta's skyline at sunset surrounded by lush greenery and urban roads";
const paragraph_text = '<p style="color: orange;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aliquid repudiandae atque.</p>';
</script>

<h1>
    Hello, {name}!
</h1>

<img {src} {alt} style="width: 300px; margin: 1rem auto;">

{@html paragraph_text}

<style>
    h1 {
      color: red;
      font-size: 36px;
    }
</style>