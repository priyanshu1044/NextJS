import React from 'react';

export function CommentForm() {

    return (
        <div>
            <form>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea 
                            id="comment" 
                            rows="4" 
                            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                            placeholder="Write a comment..." 
                            required
                            style={{ width: '80vw', height: '50vh' }}
                        ></textarea>
                    </div>

                    {/* Comment Form Buttons */}
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        >
                            Post comment
                        </button>
                        <div className="flex space-x-1">
                            {/* Attach File Button */}
                            <button
                                type="button"
                                className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                                {/* SVG for Attach File */}
                                <span className="sr-only">Attach file</span>
                            </button>

                            {/* Set Location Button */}
                            <button
                                type="button"
                                className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                                {/* SVG for Set Location */}
                                <span className="sr-only">Set location</span>
                            </button>

                            {/* Upload Image Button */}
                            <button
                                type="button"
                                className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                                {/* SVG for Upload Image */}
                                <span className="sr-only">Upload image</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>

            {/* Community Guidelines */}
            <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
                Remember, contributions to this topic should follow our{' '}
                <a className="text-blue-600 dark:text-blue-500 hover:underline">
                    Community Guidelines
                </a>.
            </p>
        </div>
    );
}

export default CommentForm;
