import { IosInfo } from "../../Interfaces/PcInterface";
import "./posInfo.scss";
interface IProps {
  systemData: IosInfo | undefined;
}

export const PosInfo = (props: IProps) => {
  return (
    <div className="pos-content-div-os-info">
      <ul>
        <li>
          {" "}
          <span className="list-color">Processor:</span>{" "}
          {/* {props.systemData?.cpuInfo.brand} */}
          11th Gen Intel(R) Core(TM) i5-1145G7E @ 2.60GHz   1.50 GHz
        </li>
        <li>
          <span className="list-color">Edition: </span>
          {/* {props.systemData?.windowsInfo.os} */}
          Windows 10 IoT Enterprise LTSC
        </li>
        <li>
          <span className="list-color"> Memory Info Total:</span>{" "}
          {/* {props.systemData?.ramInfo.total?.toFixed(2) } MB */}
          8.00 GB (7.75 GB usable)
        </li>
        <li>
          {" "}
          <span className="list-color">Free Memory:</span>{" "}
          {props.systemData?.ramInfo.free?.toFixed(2)} MB
        </li>
        <li>
          {" "}
          <span className="list-color">Uptime: </span>
          {props.systemData?.uptime.toFixed(2)} H
        </li>
      </ul>
    </div>
  );
};
