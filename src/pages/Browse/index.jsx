import Card from './card';

function Browse() {
    
    // HTML
    return (
        <>
            <h1>BROWSE</h1>
            {/* each card is imported as passed imaged and title props, these are just... placeholders */}
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
            <Card image="https://placebeard.it/640/480" title="is this a joe?"/>
        </>

    );
}

// Exports the Browse page
export default Browse;