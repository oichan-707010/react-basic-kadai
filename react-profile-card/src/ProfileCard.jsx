export function ProfileCard({ name, age, bio }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{bio}</p>
    </div>
  );
}
