import React from "react";

/* Structure
#COLORCODE[COLOR]OTHERDATA-SubtitleData
*/

export default function AboutCardTitle({ data }: { data: string }) {
  const regex = /#([0-9A-Fa-f]{6})\[([^\]]+)\]([^-]*)-?(.*)/;
  const match = data.match(regex);
  const color = match ? `#${match[1]}` : "#000000"; // Default to black if no match
  const coloredText = match ? match[2] : "";
  const remainingText = match ? match[3] : data;
  const subtitleData = match && match[4] ? match[4] : ""; // Capture subtitle data if present

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "auto",
        height: "150px",
        margin: "0 auto",
        border: "0  px solid #ccc",
      }}
    >
      <h1 className="text-6xl font-bold">
        <span style={{ color }}>{coloredText}</span>
        {" " + remainingText}
      </h1>
      {subtitleData && (
        <h2 className="text-2xl font-medium text-gray-600">{subtitleData}</h2>
      )}
    </div>
  );
}
