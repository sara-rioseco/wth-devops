const Hours = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    
    const openingHours = {
      weekday: '10:00 AM - 4:00 PM',
      weekend: '9:00 AM - 8:00 PM',
    };
  
    const isWeekend = today === 0 || today === 6;
    const todayHours = isWeekend ? openingHours.weekend : openingHours.weekday;
  
    return (
      <div className="hours-wrapper">
        <h2>Today's Opening Hours</h2>
        <p><strong>{days[today]}:</strong> {todayHours}</p>
      </div>
    );
  };
  export default Hours;