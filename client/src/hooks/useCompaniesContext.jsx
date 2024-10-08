import { CompaniesContext } from "../context/CompanyContext";
import { useContext } from "react";

export const useCompaniesContext = () => {
  const context = useContext(CompaniesContext);
  if (!context) {
    throw Error(
      "useCompaniesContext should be used inside an CompaniesContextProvider"
    );
  }
  return context;
};
