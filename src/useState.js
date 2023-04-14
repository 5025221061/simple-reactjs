import React, { useEffect, useState } from "react";

function HandleNegatifValue({ value }) {
  if (value === -1) {
    return (
      <>
        <h1>Habis woy !!!</h1>
      </>
    );
  } else {
    return (
      <>
        <h4>Banyak proyekku saat ini adalah {value}</h4>
      </>
    );
  }
}

function State() {
  const [proyekSaya, setProyekSaya] = useState(0);

  useEffect(() => {
    if (proyekSaya === -1) {
      alert("Habis woy !!!");
    }
  }, [proyekSaya]);

  function handleProyekSelesai() {
    setProyekSaya((value) => value - 1);
  }

  return (
    <>
      <button onClick={() => setProyekSaya((value) => value + 1)}>
        Tambah Proyek
      </button>
      <button onClick={handleProyekSelesai}>Proyek selesai</button>
      <HandleNegatifValue value={proyekSaya} />
    </>
  );
}

export default State;
