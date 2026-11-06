import { useState, useEffect } from "react";
import "../styles/InboxTitle.css";

function InboxTitle() {
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    if (unread === 0) {
      document.title = "Inbox";
    } else {
      document.title = `(${unread}) Inbox`;
    }
  }, [unread]);

  return (
    <div className="inbox">
      <p>You have {unread} unread messages</p>

      <button onClick={() => setUnread(unread + 1)}>
        New message
      </button>

      <button onClick={() => setUnread(0)}>
        Mark all read
      </button>
    </div>
  );
}

export default InboxTitle;