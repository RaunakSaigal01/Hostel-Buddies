import { useState , useEffect} from "react";
import useImages from "../hooks/images";

function HostelBlocks({ onSelectBlock }) {
  const { getImageUrl } = useImages();
  const blocks = [
    { id: 1, name: "ALBERT EINSTEIN", letter: "A", AC1: 0, NAC1: 0, AC2: 2, NAC2: 19, AC3: 0, NAC3: 0, AC4: 30, NAC4: 46, AC6: 0, NAC6: 16, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "N/A", Washroom: "60%", Dhobi: "N/A", RoomClean: "75%",SecretNAC6:"Check check check"},
    { id: 2, name: "RABINDRANATH TAGORE", letter: "C", AC1: 0, NAC1: 0, AC2: 2, NAC2: 102, AC3: 0, NAC3: 0, AC4: 0, NAC4: 15, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "N/A", Washroom: "25%", Dhobi: "N/A", RoomClean: "40%" },
    { id: 3, name: "NELSON MANDELA", letter: "D", AC1: 87, NAC1: 78, AC2: 0, NAC2: 0, AC3: 0, NAC3: 0, AC4: 0, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "N/A", Washroom: "N/A", Dhobi: "N/A", RoomClean: "N/A" },
    { id: 4, name: "CV RAMAN", letter: "E", AC1: 0, NAC1: 0, AC2: 0, NAC2: 225, AC3: 0, NAC3: 0, AC4: 0, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "N/A", Washroom: "80%", Dhobi: "N/A", RoomClean: "70%" },
    { id: 5, name: "RAMANUJAN", letter: "F", AC1: 0, NAC1: 0, AC2: 208, NAC2: 0, AC3: 0, NAC3: 0, AC4: 11, NAC4: 0, AC6: 148, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "60%", Washroom: "N/A", Dhobi: "N/A", RoomClean: "50%" },
    { id: 6, name: "SOCRATES", letter: "G", AC1: 0, NAC1: 0, AC2: 2, NAC2: 19, AC3: 0, NAC3: 0, AC4: 30, NAC4: 46, AC6: 0, NAC6: 16, AC8: 0, NAC8: 0, Facilities: "⁕ Good Location ⁕", Mess: "75%", Washroom: "90%", Dhobi: "85%", RoomClean: "50%" },
    { id: 7, name: "JOHN F KENNEDY", letter: "H", AC1: 0, NAC1: 0, AC2: 2, NAC2: 19, AC3: 0, NAC3: 0, AC4: 30, NAC4: 46, AC6: 0, NAC6: 16, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "80%", Washroom: "N/A", Dhobi: "N/A", RoomClean: "75%" },
    { id: 8, name: "JOHN F KENNEDY", letter: "J", AC1: 145, NAC1: 177, AC2: 0, NAC2: 0, AC3: 0, NAC3: 184, AC4: 0, NAC4: 0, AC6: 0, NAC6: 9, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "80%", Washroom: "N/A", Dhobi: "N/A", RoomClean: "75%" },
    { id: 9, name: "SARVEPALLI ", letter: "K", AC1: 0, NAC1: 0, AC2: 0, NAC2: 0, AC3: 0, NAC3: 0, AC4: 50, NAC4: 0, AC6: 251, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "1 Badminton Court", Mess: "80%", Washroom: "70%", Dhobi: "N/A", RoomClean: "80%" },
    { id: 10, name: "SUBHASH CHANDRA", letter: "L", AC1: 17, NAC1: 0, AC2: 323, NAC2: 6, AC3: 14, NAC3: 0, AC4: 35, NAC4: 1, AC6: 150, NAC6: 0, AC8: 0, NAC8: 0, Facilities: " ⁕ Scenic View  ⁕ 1 Badminton Court ⁕", Mess: "95%", Washroom: "90%", Dhobi: "85%", RoomClean: "85%" ,SecretAC6:"Rooms 545,645,745,845 have an attached washroom",SecretAC2:"Rooms from 6th floor onwards ending with 10 till 30 have scenic view plus partial view of riviera"},
    { id: 11, name: "QUAID-E-MILLAT", letter: "M", AC1: 0, NAC1: 0, AC2: 2, NAC2: 19, AC3: 0, NAC3: 0, AC4: 30, NAC4: 46, AC6: 0, NAC6: 16, AC8: 0, NAC8: 0, Facilities: "⁕ 1 Badminton Court ⁕", Mess: "95%", Washroom: "90%", Dhobi: "85%", RoomClean: "85%" },
    { id: 12, name: "CHARLES DARWIN", letter: "N", AC1: 0, NAC1: 0, AC2: 190, NAC2: 0, AC3: 229, NAC3: 0, AC4: 0, NAC4: 0, AC6: 72, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "⁕ 3 Badminton Courts ⁕", Mess: "65%", Washroom: "65%", Dhobi: "85%", RoomClean: "55%" },
    { id: 13, name: "SARDAR PATEL", letter: "P", AC1: 0, NAC1: 0, AC2: 2, NAC2: 19, AC3: 0, NAC3: 0, AC4: 30, NAC4: 46, AC6: 0, NAC6: 16, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "90%", Washroom: "80%", Dhobi: "80%", RoomClean: "85%" },
    { id: 14, name: "VAJPAYEE", letter: "Q", AC1: 0, NAC1: 0, AC2: 2, NAC2: 19, AC3: 0, NAC3: 0, AC4: 30, NAC4: 46, AC6: 0, NAC6: 16, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "70%", Washroom: "75%", Dhobi: "85%", RoomClean: "85%" },
    { id: 15, name: "MUTHAMIZH ARIGNAR", letter: "R", AC1: 18, NAC1: 1, AC2: 78, NAC2: 0, AC3: 161, NAC3: 0, AC4: 183, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "55%", Washroom: "90%", Dhobi: "N/A", RoomClean: "85%" },
    { id: 16, name: "A.P.J ABDUL KALAM", letter: "S", AC1: 34, NAC1: 0, AC2: 255, NAC2: 0, AC3: 0, NAC3: 0, AC4: 425, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "80%", Washroom: "75%", Dhobi: "60%", RoomClean: "85%" ,SecretAC4:"Rooms ending with 34 and 28 are 1.5 times bigger than the rest"},
    { id: 17, name: "JAGDISH CHANDRA BOSE", letter: "T", AC1: 34, NAC1: 0, AC2: 255, NAC2: 0, AC3: 0, NAC3: 0, AC4: 425, NAC4: 0, AC6: 0, NAC6: 0, AC8: 0, NAC8: 0, Facilities: "N/A", Mess: "85%", Washroom: "75%", Dhobi: "60%", RoomClean: "85%" , SecretAC4:"Rooms ending with 27 and 18 are 1.5 times bigger than the rest"},
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (startIndex + itemsPerPage < blocks.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleBlocks = blocks.slice(startIndex, startIndex + itemsPerPage);



  return (
    <section id="about" className="about" data-aos="zoom-in"> 
      <div className="container">
        <h2 className="section-title">
          <i className="fa-regular fa-building"></i> Blocks
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Prev Button */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              style={{
                padding: "10px 15px",
                borderRadius: "50%",
                border: "none",
                background: "#007BFF",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ⬅
            </button>
          )}

          {/* Blocks */}
          <div className="about-image" style={{ display: "flex", gap: "20px" }}>
            {visibleBlocks.map((block) => (
              <div
                key={block.id}
                className="profile-card"
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: "opacity 0.6s, transform 0.6s",
                  cursor: "pointer",
                }}
                onClick={() => onSelectBlock(block)}
              >
                <div className="profile-header">
                  <div className="profile-avatar">
                    <img
                      className="abc"
                      src={getImageUrl(block)}
                      alt={block.name}
                    />
                  </div>
                  <div className="info-item">
                    <h3>{block.name}</h3>
                    <p>aka</p>
                    <h3>{block.letter}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          {startIndex + itemsPerPage < blocks.length && (
            <button
              onClick={handleNext}
              style={{
                padding: "10px 15px",
                borderRadius: "50%",
                border: "none",
                background: "#007BFF",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ➡
            </button>
          )}
        </div>
      </div>
    </section>
  );
}


export default HostelBlocks;
