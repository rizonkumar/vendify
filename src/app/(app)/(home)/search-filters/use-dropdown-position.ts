import { RefObject } from "react";

/**
 * Custom hook to calculate the optimal position for a dropdown menu
 * relative to a reference element (usually a button/input that triggers it).
 *
 * @param ref - React ref object pointing to the trigger element
 * @returns An object with the `getDropdownPosition` function
 */
export const useDropDownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  /**
   * Calculates the dropdown position relative to the reference element
   * while ensuring it stays within viewport boundaries
   *
   * @returns Object with { top, left } coordinates for the dropdown
   */
  const getDropdownPosition = () => {
    // Return default position if reference element doesn't exist
    if (!ref.current) return { top: 0, left: 0 };

    // Get the reference element's dimensions and position
    const elementRect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // Fixed width for the dropdown

    // Calculate initial position (below the element)
    let left = elementRect.left + window.scrollX;
    const top = elementRect.bottom + window.scrollY;

    // Check if dropdown would extend beyond right viewport edge
    if (left + dropdownWidth > window.innerWidth) {
      // Align dropdown's right edge with reference element's right edge
      left = elementRect.right + window.scrollX - dropdownWidth;

      // If still off-screen (very narrow viewport), align to viewport right with padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16; // 16px padding from edge
      }
    }

    // Note: The current implementation doesn't check vertical boundaries
    // but the structure allows for adding that check if needed

    return { top, left };
  };

  return { getDropdownPosition };
};
