import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = props.getData?.(props.language).then(responce => setBookData(responce)); // `?`を使用することで,`getData`が存在する場合のみ関数を実行できる
    }, [props])

    return (
        <div>
            <ul>
                {
                bookData === null
                    ? <p>now loading...</p>
                    : bookData.data.items.map((x, index) => 
                    <div>
                        {/* <p>{JSON.stringify(bookData)}</p> */}

                        <li key={index}>
                            <a target="_blank" href={x.volumeInfo.previewLink}>
                                {x.volumeInfo.title}
                            </a>                               
                        </li>

                        <div key={index}>
                            {x.volumeInfo.authors}
                            , {x.volumeInfo.publisher}
                            ({x.volumeInfo.publishedDate})
                        </div>

                        {x.volumeInfo.imageLinks === undefined
                        ? <a>
                          <img alt="画像がありません"></img>
                          </a>
                        : <a href={x.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
                          <img src={x.volumeInfo.imageLinks.thumbnail} alt={x.volumeInfo.title}></img>
                          </a>
                        }
            <hr />
                    </div>       
                    )
                }
            </ul>
        </div>
        
    );
}
export default Booklist;