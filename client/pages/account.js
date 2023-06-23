import React, { useState, useEffect } from "react";
import Profile from "@/components/Profile";
import { useRouter } from "next/router";
import axios from "axios";

const Account = () => {
  return (
    <div className="flex align-center justify-center">
      <Profile />
    </div>
  );
};

export default Account;
