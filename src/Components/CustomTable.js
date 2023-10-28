import { useEffect, useState } from "react";
import axios from "../api/axios";

const CustomTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("/display-table");
        //console.log(response.data);
        let temp = [];
        let rows = [];
        response.data.display_data.forEach((item) => {
          if (temp.length < 2) {
            temp.push(item);
          }
          if (temp.length == 2) {
            rows.push([...temp]);
            temp = [];
          }
        });
        temp.length && rows.push(temp);
        if (rows.length % 2 != 0) {
          temp.push({});
        }
        setData(rows);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <table
      style={{ border: "1px solid black", width: "90%" }}
      id="display-data"
    >
      <thead>
        <tr>
          <th
            colSpan={2}
            style={{
              border: "1px solid black",
              color: "rgb(240, 11, 11)",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            MBA Entrance Exam &amp; MBA/PGDM Admissions – Apply Now
          </th>
        </tr>
      </thead>
      <tbody id="display-data-body">
        {data.map((item) => {
          return (
            <tr style={{ fontSize: "14px" }}>
              {item.map((item) => {
                return (
                  <td
                    style={{
                      color: "rgb(5, 123, 241)",
                      textDecoration: "underline 1px solid",
                      border: "1px solid black",
                      paddingLeft: "30px",
                    }}
                  >
                    <a href={item.url} target="_blank">
                      {item.display_name}
                    </a>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CustomTable;
