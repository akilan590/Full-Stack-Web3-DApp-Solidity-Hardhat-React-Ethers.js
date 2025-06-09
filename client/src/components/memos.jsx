import { useEffect, useState } from "react";

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const fetchMemos = async () => {
            if (contract) {
                const memos = await contract.getMemos();
                setMemos(memos);
            }
        };
         contract && fetchMemos();
    }, [contract]);

  return (
  <div className="container-fluid" style={{ padding: "20px", background: "linear-gradient(135deg, #1e1e2f, #3e3c61)" }}>
    <h2 style={{
      textAlign: "center",
      marginTop: "20px",
      color: "transparent",
      background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      padding: "15px",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(123, 47, 247, 0.6)",
      fontWeight: "900",
      fontSize: "2rem",
      letterSpacing: "3px"
    }}>
      💬 Recent Chai Messages
    </h2>

    <table style={{
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0 12px",
      marginTop: "30px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 0 30px rgba(241, 7, 163, 0.3)",
      background: "#2b2b44",
      color: "#eee",
      fontSize: "1rem",
      fontWeight: "500"
    }}>
      <thead>
        <tr style={{
          background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
          color: "#fff",
          fontWeight: "700",
          letterSpacing: "1.5px",
          boxShadow: "0 4px 15px rgba(241, 7, 163, 0.7)"
        }}>
          <th style={{ padding: "12px 20px", border: "none", textAlign: "left" }}>Name</th>
          <th style={{ padding: "12px 20px", border: "none", textAlign: "left" }}>Timestamp</th>
          <th style={{ padding: "12px 20px", border: "none", textAlign: "left" }}>Message</th>
          <th style={{ padding: "12px 20px", border: "none", textAlign: "left" }}>From</th>
        </tr>
      </thead>
      <tbody>
        {memos.map((memo, index) => (
          <tr
            key={index}
            style={{
              background: index % 2 === 0 ? "rgba(123, 47, 247, 0.2)" : "rgba(241, 7, 163, 0.2)",
              transition: "background 0.3s ease",
              cursor: "pointer",
              borderRadius: "15px",
              boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.1)",
              color: "#f0e9ff"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(241, 7, 163, 0.4)"}
            onMouseLeave={e => e.currentTarget.style.background = index % 2 === 0 ? "rgba(123, 47, 247, 0.2)" : "rgba(241, 7, 163, 0.2)"}
          >
            <td style={{ padding: "14px 20px", borderBottom: "none" }}>{memo.name}</td>
            <td style={{ padding: "14px 20px", borderBottom: "none" }}>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
            <td style={{ padding: "14px 20px", borderBottom: "none", fontStyle: "italic" }}>{memo.message}</td>
            <td style={{ padding: "14px 20px", borderBottom: "none", fontWeight: "700" }}>{memo.from}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}
export default Memos;