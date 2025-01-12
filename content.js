let isDeleting = false;
const DELAY_BETWEEN_DELETIONS = 1000;
const SCROLL_DELAY = 2000;

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteOneTweet() {
  const menuButtons = document.querySelectorAll(
    '[data-testid="tweet"] [aria-label="More"]'
  );
  const visibleMenu = Array.from(menuButtons).find(
    (button) => button.offsetParent !== null
  );

  if (!visibleMenu) return false;

  visibleMenu.click();
  await wait(500);

  const deleteButton = document.querySelector(
    '[data-testid="Dropdown"] [role="menuitem"]'
  );
  if (!deleteButton || !deleteButton.textContent.includes("Delete")) {
    return false;
  }
  deleteButton.click();
  await wait(500);

  const confirmButton = document.querySelector(
    '[data-testid="confirmationSheetConfirm"]'
  );
  if (!confirmButton) return false;
  confirmButton.click();

  return true;
}

async function scrollDown() {
  window.scrollTo(0, document.body.scrollHeight);
  await wait(SCROLL_DELAY);
}

async function startDeletingTweets() {
  let deletedCount = 0;
  let failedAttempts = 0;

  while (isDeleting && failedAttempts < 3) {
    const success = await deleteOneTweet();

    if (success) {
      deletedCount++;
      console.log(`Deleted ${deletedCount} tweets`);
      failedAttempts = 0;
      await wait(DELAY_BETWEEN_DELETIONS);
    } else {
      failedAttempts++;
      await scrollDown();
    }
  }

  console.log(`Finished deleting tweets. Total deleted: ${deletedCount}`);
}

window.addEventListener("message", (event) => {
  if (event.data.type === "START_DELETE_TWEETS") {
    isDeleting = true;
    startDeletingTweets();
  } else if (event.data.type === "STOP_DELETE_TWEETS") {
    isDeleting = false;
  }
});
