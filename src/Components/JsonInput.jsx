import React from 'react'

const JsonInput = () => {
    return (
        <div>
            <form>
                <label htmlFor="json">Write json schema here</label>
                <input id="json" type="text" name="json" />
            </form>
        </div>
    )
}

export default JsonInput