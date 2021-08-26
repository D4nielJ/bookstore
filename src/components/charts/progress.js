import { Pie } from 'react-chartjs-2';

const Progress = (props) => {
  const { percentage } = props;
  const nonRead = 100 - percentage;

  const data = {
    datasets: [
      {
        labels: ['Completed', 'Missing'],
        data: [percentage, nonRead],
        backgroundColor: [
          'rgb(55, 156, 246)',
          'rgb(136, 136, 136)',
        ],
        hoverOffset: 1,
      },
    ],
  };

  const options = {
    cutout: '80%',
    borderWidth: 0,
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Progress;
