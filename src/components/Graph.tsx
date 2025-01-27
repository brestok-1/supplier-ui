import { FC, useEffect, useState } from "react";
import {
   ScatterChart,
   Scatter,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   ReferenceLine,
   ReferenceArea,
   ReferenceDot,
   TooltipProps,
} from "recharts";
import { IDotData } from "../types/DataType";

const getSegment = (x: number, y: number) => {
   if (x <= 2 && y > 2) return "Leverage";
   if (x > 2 && y > 2) return "Strategic";
   if (x <= 2 && y <= 2) return "Non-critical";
   return "Bottleneck";
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
   active,
   payload,
}) => {
   if (active && payload && payload.length) {
      const { x, y } = payload[0].payload;
      return (
         <div className="bg-white p-2 border rounded shadow-md">
            <p className="font-semibold">Segment: {getSegment(x, y)}</p>
            <p>
               X: {x.toFixed(2)}, Y: {y.toFixed(2)}
            </p>
         </div>
      );
   }
   return null;
};

interface CustomChartProps {
   data: IDotData[];
}

const CustomChart: FC<CustomChartProps> = ({ data }) => {
  const [fontSize, setFontSize] = useState(18);
  useEffect(() => {
    const updateFontSize = () => {
       setFontSize(window.innerWidth <= 768 ? 14 : 18);
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
 }, []);
   return (
      <ResponsiveContainer width="100%" height={400} minWidth={500}>
         <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid stroke="#3B82F6" strokeWidth={1} />

            <ReferenceArea
               x1={0}
               x2={2}
               y1={2}
               y2={4}
               fill="#d3d3d3"
               fillOpacity={0.4}
            />
            <ReferenceArea
               x1={2}
               x2={4}
               y1={2}
               y2={4}
               fill="#f0f0f0"
               fillOpacity={0.3}
            />
            <ReferenceArea
               x1={0}
               x2={2}
               y1={0}
               y2={2}
               fill="#f0f0f0"
               fillOpacity={0.3}
            />
            <ReferenceArea
               x1={2}
               x2={4}
               y1={0}
               y2={2}
               fill="#d3d3d3"
               fillOpacity={0.4}
            />

            <XAxis
               type="number"
               dataKey="x"
               domain={[0, 4]}
               label={{
                  value: "Supply Risk",
                  position: "insideBottom",
                  offset: -10,
                  style: { fontSize }
               }}
               fontSize={fontSize}
            />
            <YAxis
               type="number"
               dataKey="y"
               domain={[0, 4]}
               label={{
                  value: "Profit Impact",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                  style: { fontSize }
               }}
               fontSize={fontSize}
            />

            <ReferenceLine x={2} stroke="#3B82F6" strokeWidth={2} />
            <ReferenceLine y={2} stroke="#3B82F6" strokeWidth={2} />
            <ReferenceDot
               x={0.5}
               y={3.5}
               r={0}
               label={{
                  value: "Leverage",
                  position: "center",
                  fill: "#000",
                  fontSize,
                  fontWeight: "600",
                  textAnchor: "middle",
                  alignmentBaseline: "middle",
                  dx: -10,
                  dy: -10,
               }}
            />
            <ReferenceDot
               x={2.5}
               y={3.5}
               r={0}
               label={{
                  value: "Strategic",
                  position: "center",
                  fill: "#000",
                  fontSize,
                  fontWeight: "600",
                  textAnchor: "middle",
                  alignmentBaseline: "middle",
                  dx: 10,
                  dy: -10,
               }}
            />
            <ReferenceDot
               x={0.5}
               y={1}
               r={0}
               label={{
                  value: "Non-critical",
                  position: "center",
                  fill: "#000",
                  fontSize,
                  fontWeight: "600",
                  textAnchor: "middle",
                  alignmentBaseline: "middle",
                  dx: -10,
                  dy: 10,
               }}
            />
            <ReferenceDot
               x={2.5}
               y={1}
               r={0}
               label={{
                  value: "Bottleneck",
                  position: "center",
                  fill: "#000",
                  fontSize,
                  fontWeight: "600",
                  textAnchor: "middle",
                  alignmentBaseline: "middle",
                  dx: 10,
                  dy: 10,
               }}
            />

            <Scatter data={data} fill="blue" />

            <Tooltip
               content={<CustomTooltip />}
               cursor={{ strokeDasharray: "3 3" }}
            />
         </ScatterChart>
      </ResponsiveContainer>
   );
};

export default CustomChart;
