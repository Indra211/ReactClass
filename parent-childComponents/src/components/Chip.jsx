function Chip({ children, label, data }) {
  console.log(children, label, data);
  return (
    <div>
      Chip
      <p>{label}</p>
      <p>{data}</p>
      {children}
    </div>
  );
}

export default Chip;
