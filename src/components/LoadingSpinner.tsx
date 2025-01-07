import "./LoadingSpinner.css"; // 你可以在这个文件中定义加载动画的样式

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      {/* 这里可以放置你的加载动画 */}
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
