// * Integration Testing - Testing filter Feature => which includes many components

import { fireEvent, render, screen } from "@testing-library/react";
import MonitorMachines from "../components/MonitorManchines";
import MOCK_DATA from "../utils/machineStatus.json";
import "@testing-library/jest-dom";
import React, { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Header testing", () => {
  it("should load all machine list", async () => {
    await act(async () => render(<MonitorMachines />));

    let DetailsCard = screen.getByText(/Machine Detailed Info/);
    expect(DetailsCard).toBeInTheDocument(); 

    let allMAchineCards = screen.getAllByText(/Health Status/);
    expect(allMAchineCards.length).toBe(9);

    const acceptable = screen.getByRole("button", { name: /Acceptable/i });
    fireEvent.click(acceptable);

    allMAchineCards = screen.getAllByText(/Health Status/);
    expect(allMAchineCards.length).toBe(2);

    const monitor = screen.getByRole("button", { name: /Monitor/i });
    fireEvent.click(monitor);

    allMAchineCards = screen.getAllByText(/Health Status/);
    expect(allMAchineCards.length).toBe(3);

    const Danger = screen.getByRole("button", { name: /Danger/i });
    fireEvent.click(Danger);

    allMAchineCards = screen.getAllByText(/Health Status/);
    expect(allMAchineCards.length).toBe(2);

    const noStatus = screen.getByRole("button", { name: /No Status/i });
    fireEvent.click(noStatus);

    allMAchineCards = screen.getAllByText(/Health Status/);
    expect(allMAchineCards.length).toBe(2);

    const showAll = screen.getByRole("button", { name: /Show All/i });
    fireEvent.click(showAll);

    allMAchineCards = screen.getAllByText(/Health Status/);
    expect(allMAchineCards.length).toBe(9);

    const alarm = screen.getByRole("button", { name: /Alarm/i });
    fireEvent.click(alarm);

    allMAchineCards = screen.getAllByText(/Health Status/);
    expect(allMAchineCards.length).toBe(1);

  });
});
