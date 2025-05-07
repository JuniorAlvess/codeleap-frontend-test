const getTimeDifference = (targetDate) => {
  const targetTime = new Date(targetDate).getTime();

  if (isNaN(targetTime)) {
    console.error('Invalid date passed to getTimeDifference:', targetDate);
    return 'Invalid date';
  }

  const now = Date.now();
  const timeDifference = Math.floor(Math.abs(now - targetTime) / 1000);

  if (timeDifference >= 86400) {
    const daysAgo = Math.floor(timeDifference / 86400);
    return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  }

  if (timeDifference >= 3600) {
    const hoursAgo = Math.floor(timeDifference / 3600);
    return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  }

  if (timeDifference >= 60) {
    const minutesAgo = Math.floor(timeDifference / 60);
    return `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  }

  return `${timeDifference} second${timeDifference !== 1 ? 's' : ''} ago`;
};

export default getTimeDifference;
