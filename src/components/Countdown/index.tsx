import { DateTime, DurationUnit, Interval } from "luxon";
import { equals } from "ramda";
import * as React from "react";
import styled, { keyframes } from "../../theme";
import { MinorTitle } from "../Text";

const TextFlip = keyframes`
{
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
}
`;
const t = 80;
const d = 100;
const p = 2;
const DisplayBox = styled.div`
  display: grid;
  grid-template-columns: ${d}px ${t}px ${t}px ${t}px;
  grid-gap: 2px;
  padding: 2px;
`;

const DisplayBoxElement = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
  text-align: center;
  width: ${t - p}px;
`;

const DisplayBoxElementDays = styled(DisplayBoxElement)`
  border: none;
  width: 80px;
`;

const DisplayNumbers = styled.h3`
  animation: ${TextFlip} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  color: ${props => props.theme.primaryColor};
  font-family: "Orbitron", sans-serif;
  font-size: 38px;
`;

const Label = styled.label`
  color: ${props => props.theme.primaryColor};
  font-family: "Roboto", sans-serif;
  font-size: 0.5em;
  margin-top: -40px;
  padding: 0;
  text-align: left;
`;

const ClockTitle = styled(MinorTitle)`
  font-size: 0.72em;
  grid-column: 1 / 5;
  margin-bottom: -5px;
`;

const Display: React.SFC<{ n: number }> = ({ n }) => (
  <DisplayNumbers>{String(n).length > 1 ? String(n) : `0${n}`}</DisplayNumbers>
);

interface ITimeUnit {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ICState {
  expires: DateTime;
  keys: DurationUnit[];
  time: ITimeUnit;
  timer?: NodeJS.Timer;
}

class Countdown extends React.Component<{}, ICState> {
  public state = {
    expires: DateTime.local(2018, 12, 20),
    keys: ["days", "hours", "minutes", "seconds"] as DurationUnit[],
    time: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    timer: setInterval(() => this.setTime(), 1000)
  };

  public componentWillUnmount = () => clearInterval(this.state.timer);

  public setTime = () => {
    const { expires, keys, time } = this.state;
    const timeObject = Interval.fromDateTimes(DateTime.local(), expires)
      .toDuration(keys)
      .toObject();
    if (!equals(timeObject, time)) {
      this.setState({ time: timeObject as ITimeUnit });
    }
  };

  public render() {
    const {
      time: { days, hours, minutes, seconds }
    } = this.state;
    return (
      <DisplayBox>
        <ClockTitle>Public Sale Countdown</ClockTitle>
        <DisplayBoxElementDays>
          <Display n={days} />
          <Label>days</Label>
        </DisplayBoxElementDays>
        <DisplayBoxElement>
          <Display n={hours} />
          <Label>hours</Label>
        </DisplayBoxElement>
        <DisplayBoxElement>
          <Display n={minutes} />
          <Label>mins</Label>
        </DisplayBoxElement>
        <DisplayBoxElement>
          <Display n={Math.floor(seconds)} />
          <Label>secs</Label>
        </DisplayBoxElement>
      </DisplayBox>
    );
  }
}

export default Countdown;
