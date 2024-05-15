import moment from "moment";
import ChartArea from "../components/chart/ChartArea";
import { useEffect, useState } from "react";
import ChartPie from "../components/chart/ChartPice";

const Test = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<number[]>([]);
    const [label, setLabel] = useState<string[]>([]);

    const getDay = (day = 35) => {
        const currentDate = moment();
        let thirtyDaysAgoDates: string[] = [];
        const step = 5;
        let currentScale = 2;

        for (let i = 0; i < day; i++) {
            if (i === 0) {
                thirtyDaysAgoDates = [ '' ,...thirtyDaysAgoDates]
            } else {
                if (i === currentScale) {
                    thirtyDaysAgoDates = [currentDate.clone().format('DD MMM'), ...thirtyDaysAgoDates];
                    currentScale += step
                } else {
                    thirtyDaysAgoDates = [ '' ,...thirtyDaysAgoDates]
                }
                currentDate.subtract(1, 'day');
            }
        }

        thirtyDaysAgoDates.forEach(day => day);

        return thirtyDaysAgoDates;
    }

    const dataDemo = (arr: any = []) => {
        const newData = []
        for (let i = 0; i < arr.length; i++) {
            newData.push(Math.floor(10 + Math.random()*(900 - 10 + 1)))
        }
        return newData
    }


    useEffect(() => {
        setLoading(true);
        const dataDay: string[] = getDay(30);
        const data = dataDemo(dataDay)
        setData(data)
        setLabel(dataDay)
        setLoading(false);
    }, []);

    return (
        <div className="grid grid-cols-2 gap-32">
            <div>
                {
                    !loading && <ChartArea
                        data={data}
                        labels={label}
                        step={4}
                        // colorLabels="red"
                    />
                }
            </div>

            <div>
                {
                    !loading && <ChartPie
                        dataChart={[12,13,45,12]}
                        backgroundColor={[
                            'rgba(0,72,183,255)',
                            'rgba(0,100,255,255)',
                            'rgba(83,150,255,255)',
                            'rgba(164,199,255,255)',
                        ]}
                    />
                }
            </div>
        </div>
    );
}
 
export default Test;