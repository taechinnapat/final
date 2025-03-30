import { useState } from "react";

export default function KaraokeBilling() {
  const [studentCard, setStudentCard] = useState(null);
  const [NoCard, setNoCard] = useState("");
  const [Card, setCard] = useState("");
  const [total, setTotal] = useState("");

  

  const calculateTotal = () => {
    if (studentCard === false && !NoCard) {
        alert("กรุณากรอกจำนวนชั่วโมง");
    
      }
      if (studentCard === true && !Card) {
        alert("กรุณากรอกจำนวนชั่วโมง");
      }
    
    let totalAmount = 0;
    if (studentCard === false) {
      totalAmount = (parseInt(NoCard) || 0) * 120;
    } else if (studentCard === true) {
      totalAmount = (parseInt(Card) || 0) * 80;
    }
    setTotal(totalAmount);
  };

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <table width="400" border="2" bordercolor="#000000">
        <tr>
          <td colspan="2" id="karaokae">ร้านคาราโอเกะ</td>
        </tr>
        <tr>
          <td>
            <br />
            &nbsp;&nbsp;
            <input
              type="radio"
              name="c1"
              id="nohave"
              value="ไม่มีบัตร"
              checked={studentCard === false}
              onChange={() => setStudentCard(false)}
            />
            ไม่มีบัตรนักศึกษา <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน
            <input
              type="text"
              size="2"
              id="txtqty1"
              value={NoCard}
              onChange={(e) => setNoCard(e.target.value)}
            />
            ชั่วโมง <br />
            &nbsp;&nbsp;
            <input
              type="radio"
              name="c1"
              id="have"
              value="มีบัตร"
              checked={studentCard === true}
              onChange={() => setStudentCard(true)}
            />
            มีบัตรนักศึกษา <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
            <input
              type="text"
              size="2"
              id="txtqty2"
              value={Card}
              onChange={(e) => setCard(e.target.value)}
            />
            ชั่วโมง <br />
            <br />
          </td>
        </tr>
      </table>
      <br />
      <button onClick={calculateTotal}>คิดเงิน</button>
      <br />
      รวมเป็นเงินทั้งสิ้น =
      <input type="text" id="txtTotal" value={total} readOnly /> บาท
    </div>
  );
}