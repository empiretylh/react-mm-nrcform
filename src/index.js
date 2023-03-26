import React,{useEffect,useState} from 'react'
import styles from './styles.module.css'
import { Form } from "react-bootstrap";
import { nrcdata } from "./nrcdata";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

export default function NRCForm({
  NRCCodeSelect = 1,
  setNRCCodeSelect,
  NRCPlaceSelect,
  setNRCPlaceSelect,
  NRCTypeSelect,
  setNRCTypeSelect,
  NRCCode,
  setNRCCode,
  language = "all",
}) {
  const nrcode = [
    {
      en: "1",
      mm: "၁",
    },
    { en: "2", mm: "၂" },
    { en: "3", mm: "၃" },
    { en: "4", mm: "၄" },
    { en: "5", mm: "၅" },
    { en: "6", mm: "၆" },
    { en: "7", mm: "၇" },
    { en: "8", mm: "၈" },
    { en: "9", mm: "၉" },
    { en: "10", mm: "၁၀" },
    { en: "11", mm: "၁၁" },
    { en: "12", mm: "၁၂" },
    { en: "13", mm: "၁၃" },
    { en: "14", mm: "၁၄" },
  ];
  const nrcType = [
    { en: "N", mm: "နိုင်" },
    { en: "E", mm: "ဧည့်" },
    { en: "P", mm: "ပြု" },
    { en: "T", mm: "သာသနာ" },
    { en: "R", mm: "ယာယီ" },
    { en: "S", mm: "စ" },
  ];

  const [placen,setPlacen] = useState([]);

  useEffect(() => {
    const data = nrcdata;
    if (!data.length) return [];
    const result = data.filter((item) => item.nrc_code == NRCCodeSelect);
    setPlacen(result);
    setNRCPlaceSelect(result.length ? result[0].name_en : "");
  }, [NRCCodeSelect, nrcdata])


  useEffect(() => {
    setNRCCodeSelect(nrcode[0].en);
    setNRCTypeSelect(nrcType[0].en);
    // setNRCPlaceSelect(placen.length ? placen[0].name_en : "");
  }, []);

 

  return (
    <div>
      <div className="warpform">
        <Form.Select
          value={NRCCodeSelect}
          onChange={(e) => setNRCCodeSelect(e.target.value)}
          className={"nrccode"}
        >
          {nrcode.map((item, index) => (
            <option key={index} value={item.en}>
              {language === "mm"
                ? item.mm
                : language === "en"
                ? item.en
                : item.en + " - " + item.mm}
            </option>
          ))}
        </Form.Select>

        <Form.Select
          value={NRCPlaceSelect}
          onChange={(e) => setNRCPlaceSelect(e.target.value)}
          className={"nrcplace"}
        >
          {placen.length &&
            placen.map((item, index) => (
              <option key={index} value={item.name_en}>
                {language === "mm"
                  ? item.name_mm
                  : language === "en"
                  ? item.name_en
                  : item.name_en + " - " + item.name_mm}
              </option>
            ))}
        </Form.Select>

        <Form.Select
          value={NRCTypeSelect}
          onChange={(e) => setNRCTypeSelect(e.target.value)}
          className={"nrctype"}
        >
          {nrcType.map((item, index) => (
            <option key={index} value={item.en}>
              {language === "mm"
                ? item.mm
                : language === "en"
                ? item.en
                : item.en + " - " + item.mm}
            </option>
          ))}
        </Form.Select>

        <Form.Control
          type="number"
          name="nrcNo"
          placeHolder={"xxxxxxx"}
          maxLength={6}
          minLength={6}
          value={NRCCode}
          onChange={(e) => setNRCCode(e.target.value)}
          required
          className={"nrcno"}
        />
      </div>
    </div>
  );
}

