import React from "react";
import { useParams } from "react-router-dom";

const Report: React.FC = () => {
  const { sessionId } = useParams();
  return <div>Report Page - Session ID: {sessionId}</div>;
};

export default Report;