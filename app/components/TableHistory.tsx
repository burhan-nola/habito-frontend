import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface SessionData {
  idDevice: string;
}

interface HistoryItem {
  _id: string;
  date: string;
  status: boolean;
}

interface HistoryData {
  [color: string]: HistoryItem[];
}

const session = Cookies.get("userData");
const parseSession: SessionData | null = session ? JSON.parse(session) : null;
const id: string | null = parseSession ? parseSession.idDevice : null;

const TableHistory: React.FC = () => {
  const [history, setHistory] = useState<HistoryData | null>(null);

  useEffect(() => {
    const getHistory = async () => {
      try {
        if (id) {
          const res = await axios.get<HistoryData>(
            `https://api.habito.id/task-history?id=${id}`
          );
          setHistory(res.data);
        }
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };
    getHistory();
  }, []);

  if (!history) {
    return <p>Loading...</p>;
  }

  // Mendapatkan tanggal hari ini
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Menghitung tanggal 7 hari yang lalu
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6); // 6 karena termasuk hari ini

  // Buat array dari 7 hari terakhir
  const recentDates: any = [];
  for (let d = new Date(sevenDaysAgo); d <= today; d.setDate(d.getDate() + 1)) {
    recentDates.push(
      d.toLocaleDateString(undefined, { day: "numeric", month: "short" })
    );
  }

  const renderTableRow = (color: string) => {

const imageSrc:{[key:string]:string} = {
      red: '/icons/check/red.png',
      green: '/icons/check/green.png',
      blue: '/icons/check/blue.png',
      yellow: '/icons/check/yellow.png',
    };

    if (!history[color] || history[color].length === 0) {
      return (
        <tr key={color}>
          <td> <img src={imageSrc[color]} alt={color} style={{ width: '50px', height: '50px' }} />
</td>
          {recentDates.map((date: any, index: any) => (
            <td key={index}>
              <div> - </div>
            </td>
          ))}
        </tr>
      );
    }

    const dateMap: { [date: string]: HistoryItem } = {};
    history[color].forEach((item) => {
      const date = new Date(item.date).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      });
      dateMap[date] = item;
    });

    return (
      <tr key={color}>
        <td> <img src={imageSrc[color]} alt={color} style={{ width: '50px', height: '50px' }} />
</td>
        {recentDates.map((date: any, index: any) => (
          <td key={index} style={{textAlign:"center", verticalAlign:"middle"}}>
            {dateMap[date] ? (
              <div>
                {/* <div>ID: {dateMap[date]._id}</div> */}
                <div>{dateMap[date].status == true ? <FaCheck /> : "-"}</div>
              </div>
            ) : (
              <div> - </div>
            )}
          </td>
        ))}
      </tr>
    );
  };

  return (
<div style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
  <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
      }}
      className="text-center table table-striped"
    >
      <thead>
        <tr>
          <th>Task</th>
          {recentDates.map((date: any, index: any) => (
            <th key={index}>{date}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {["red", "green", "blue", "yellow"].map((color) =>
          renderTableRow(color)
        )}
      </tbody>
    </table>
</div>
  
  );
};

export default TableHistory;
