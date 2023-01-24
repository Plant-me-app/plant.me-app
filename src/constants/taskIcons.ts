import { Labels } from "./label.constants";
import { TaskTypes } from "./taskTypes.enum";

const fertilizerIcon = require("../assets/images/Details/Tasks/Fertilizer.png");
const soilIcon = require("../assets/images/Details/Tasks/Soil.png");
const sunIcon = require("../assets/images/Details/Tasks/Sun.png");
const waterIcon = require("../assets/images/Details/Tasks/Water.png");

export const taskIcons = [
    { icon: waterIcon, label: Labels.water, task: TaskTypes.Water },
    { icon: soilIcon, label: Labels.soil, task: TaskTypes.Soil },
    { icon: sunIcon, label: Labels.sun, task: TaskTypes.Light },
    {
      icon: fertilizerIcon,
      label: Labels.fertilizer,
      task: TaskTypes.Fertilizer,
    },
  ];