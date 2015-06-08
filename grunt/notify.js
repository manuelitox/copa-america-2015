module.exports = {
  // This is optional!
  notify_hooks: {
    options: {
      enabled: true,
      max_jshint_notifications: 8, // maximum number of notifications from jshint output
      title: "Copa America 2015", // defaults to the name in package.json, or will use project directory's name
      success: false, // whether successful grunt executions should be notified automatically
      duration: 3 // the duration of notification in seconds, for `notify-send only
    }
  }
}