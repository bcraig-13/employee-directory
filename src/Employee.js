//===COMPONENT GOES HERE===
function Employee() {
  fetch("https://randomuser.me/api/")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        const image = myJson.results.picture.thumbnail,
        const firstName = myJson.results.name.first,
        const lastName = myJson.results.name.last,
        const phone = myJson.results.phone,
        const email = myJson.results.email
      });
    
  return (
    <div>
      <img src="" alt=""></img>
      <p>NAME</p>
      <p>PHONE</p>
      <p>EMAIL</p>
    </div>
  );
}

export default Employee;

