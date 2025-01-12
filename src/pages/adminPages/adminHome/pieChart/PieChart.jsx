import { PieChart as Pie_Chart, Pie, Cell } from "recharts";
import useAPI_Loader from "../../../../hooks/useAPI_Loader";
import { PiCellSignalFullFill } from "react-icons/pi";

const PieChart = () => {
  const [data, isLoading] = useAPI_Loader("order-analytics", "order-analytics");

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#D99904"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <div className="flex items-center gap-x-3 *:flex *:items-center *:gap-x-2 text-lg">
        <p>
          <PiCellSignalFullFill className="text-[#0088FE]" /> SALAD
        </p>
        <p>
          <PiCellSignalFullFill className="text-[#00C49F]" /> PIZZA
        </p>
        <p>
          <PiCellSignalFullFill className="text-[#FFBB28]" /> DESSERT
        </p>
        <p>
          <PiCellSignalFullFill className="text-[#FF8042]" /> DRINKS
        </p>
        <p>
          <PiCellSignalFullFill className="text-[#D99904]" /> SOUP
        </p>
      </div>
      <Pie_Chart width={500} height={500}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="revenue"
        >
          {data.map((entry, index) => {
            entry.color =
              entry.category === "salad"
                ? colors[0]
                : entry.category === "pizza"
                ? colors[1]
                : entry.category === "dessert"
                ? colors[2]
                : entry.category === "drinks"
                ? colors[3]
                : colors[4];
            return <Cell key={`cell-${index}`} fill={entry?.color} />;
          })}
        </Pie>
      </Pie_Chart>
    </div>
  );
};

export default PieChart;
