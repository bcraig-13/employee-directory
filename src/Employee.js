function Employee() {

  return (
    <div>
      <img src={`${image}`} alt={`${firstName} ${lastName}`}></img>
      <p>
        {firstName} {lastName}
      </p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

export default Employee;
