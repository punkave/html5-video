module.exports = function(fromFile, callback) {
  // Determine format
  // Convert to the other format
  // Generate thumbnail
  // Invoke callback with null and an object containing paths to all three
  return callback(null, {
    mp4: 'test.mp4',
    webm: 'test.webm',
    jpg: 'test.jpg'
  });
};
